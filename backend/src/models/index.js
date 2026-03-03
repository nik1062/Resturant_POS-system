// MongoDB Models Index
// Export all models for easy importing

const Tenant = require('./Tenant');
const User = require('./User');
const Category = require('./Category');
const Customer = require('./Customer');
const MenuItem = require('./MenuItem');
const MenuItemAddon = require('./MenuItemAddon');
const MenuItemVariant = require('./MenuItemVariant');
const Order = require('./Order');
const OrderItem = require('./OrderItem');
const Invoice = require('./Invoice');
const Tax = require('./Tax');
const PaymentType = require('./PaymentType');
const StoreTable = require('./StoreTable');
const Reservation = require('./Reservation');
const Feedback = require('./Feedback');
const Superadmin = require('./Superadmin');
const RefreshToken = require('./RefreshToken');
const ResetPasswordToken = require('./ResetPasswordToken');
const StoreDetails = require('./StoreDetails');
const ExchangeRate = require('./ExchangeRate');
const InvoiceSequence = require('./InvoiceSequence');
const TokenSequence = require('./TokenSequence');
const SubscriptionHistory = require('./SubscriptionHistory');
const PrintSettings = require('./PrintSettings');
const QROrder = require('./QROrder');
const QROrderItem = require('./QROrderItem');

module.exports = {
    Tenant,
    User,
    Category,
    Customer,
    MenuItem,
    MenuItemAddon,
    MenuItemVariant,
    Order,
    OrderItem,
    Invoice,
    Tax,
    PaymentType,
    StoreTable,
    Reservation,
    Feedback,
    Superadmin,
    RefreshToken,
    ResetPasswordToken,
    StoreDetails,
    ExchangeRate,
    InvoiceSequence,
    TokenSequence,
    SubscriptionHistory,
    PrintSettings,
    QROrder,
    QROrderItem
};
