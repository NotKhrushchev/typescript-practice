interface IOrder {
  address: string;
}

interface ITelephoneOrder extends IOrder {
  callerNumber: string;
}

interface IInternetOrder extends IOrder {
  email: string;
}

type PossibleOrders = ITelephoneOrder | IInternetOrder | undefined;

const isAnInternetOrder = (order: PossibleOrders): order is IInternetOrder =>
  !!order && "email" in order;

const isATelephoneOrder = (order: PossibleOrders): order is ITelephoneOrder =>
  !!order && "callerNumber" in order;

const makeOrder = (order: PossibleOrders) => {
  if (isAnInternetOrder(order)) {
    console.log(order.email);
  } else if (isATelephoneOrder(order)) {
    console.log(order.callerNumber);
  }
};
