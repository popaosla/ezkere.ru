# Подключение реальной системы оплаты в РФ

## Текущая реализация (демо)

В текущей версии сайта оплата происходит через внутренний баланс пользователя, который хранится в localStorage. Это подходит для демонстрации, но не для реальных продаж.

## Для подключения реальных платежей необходимо:

### 1. Backend-сервер (обязательно)

Платёжные системы требуют серверную часть для:
- Создания платежей через API
- Обработки webhook-уведомлений о статусе платежа
- Безопасного хранения ключей API

Рекомендуемый стек: **Node.js + Express** или **Python + FastAPI**

### 2. Платёжные системы для РФ

#### ЮKassa (YooKassa) — рекомендуется
- **Сайт:** https://yookassa.ru
- **Поддерживаемые методы:** банковские карты, СБП, SberPay, Tinkoff Pay, Yandex Pay, электронные кошельки
- **Комиссия:** от 2.8% за карты, от 0.7% за СБП
- **Регистрация:** нужно ИП или ООО, заключение договора
- **SDK:** `@yookassa/yookassa-sdk-nodejs`

Пример создания платежа (Node.js):
```javascript
const { YooCheckout } = require('@a2seven/yoo-checkout');

const checkout = new YooCheckout({
  shopId: 'YOUR_SHOP_ID',
  secretKey: 'YOUR_SECRET_KEY'
});

app.post('/api/create-payment', async (req, res) => {
  const { amount, orderId } = req.body;

  const payment = await checkout.createPayment({
    amount: { value: amount.toFixed(2), currency: 'RUB' },
    capture: true,
    confirmation: {
      type: 'redirect',
      return_url: `https://ezkere.ru/order/${orderId}`
    },
    metadata: { orderId }
  });

  res.json({ confirmationUrl: payment.confirmation.confirmation_url });
});

// Webhook для получения уведомлений
app.post('/api/yookassa-webhook', (req, res) => {
  const { event, object } = req.body;
  if (event === 'payment.succeeded') {
    const orderId = object.metadata.orderId;
    // Обновить статус заказа в базе данных
    // Сгенерировать токен и отправить пользователю
  }
  res.sendStatus(200);
});
```

#### Robokassa
- **Сайт:** https://robokassa.ru
- **Поддерживаемые методы:** карты, электронные кошельки, мобильные платежи
- **Комиссия:** от 2.3%
- **Простая интеграция:** перенаправление на страницу оплаты Robokassa

#### CloudPayments
- **Сайт:** https://cloudpayments.ru
- **Преимущества:** хороший API, виджет оплаты, рекуррентные платежи
- **Комиссия:** от 2.7%
- **Есть JS-виджет** для оплаты прямо на сайте без редиректа

#### СБП (Система быстрых платежей)
- **Комиссия:** 0.4-0.7% (самая низкая)
- **Как работает:** генерируется QR-код, пользователь оплачивает через приложение банка
- **Подключение:** через банк-эквайер или агрегатор (ЮKassa, CloudPayments)

### 3. Пошаговый план подключения

1. **Зарегистрировать ИП или ООО** (обязательно для приёма платежей в РФ)
2. **Открыть расчётный счёт** в банке
3. **Зарегистрироваться в ЮKassa** (или другом агрегаторе)
4. **Пройти модерацию** — предоставить данные о бизнесе
5. **Получить ключи API** (shopId и secretKey)
6. **Развернуть backend** (Node.js + Express на VPS)
7. **Реализовать эндпоинты:**
   - `POST /api/create-payment` — создание платежа
   - `POST /api/webhook` — обработка уведомлений
   - `GET /api/payment-status/:id` — проверка статуса
8. **Настроить HTTPS** (обязательно для webhook)
9. **Протестировать** в тестовом режиме ЮKassa
10. **Перевести в боевой режим** после проверки

### 4. Изменения на фронтенде

В файле `src/pages/CheckoutPage.jsx` заменить логику оплаты с баланса на:

```javascript
const handlePay = async () => {
  const response = await fetch('/api/create-payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: cartTotal,
      orderId: generateOrderId(),
      items: cartGames.map(g => ({ id: g.id, title: g.title, price: g.price }))
    })
  });
  const { confirmationUrl } = await response.json();
  window.location.href = confirmationUrl; // Редирект на страницу оплаты
};
```

### 5. Важные моменты

- **Юридические:** нужен договор оферты на сайте, политика возврата
- **Безопасность:** никогда не храните секретные ключи на фронтенде
- **54-ФЗ:** необходима онлайн-касса для чеков (ЮKassa может предоставить)
- **Тестирование:** всегда тестируйте в sandbox-режиме перед запуском
