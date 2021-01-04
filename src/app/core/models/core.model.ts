/**
 * Type safe environment context for all env files
 */
export type Environment = {
  apiBasePath: string;
  production: boolean;
}

/**
 * Login API params
 */
export type UserCredentials = {
  username: string;
  password: string;
}

/**
 * Login API response
 */
export type LoginResponse = {
  firstName: string;
  lastName: string;
  userName: string;
  key: string;
}

export type User = LoginResponse;

/**
 * Customer API params
 */
export type CustomerPayload = {
  customerName: string;
  customerAge: string;
  customerAddress: string;
}

export type Customer = CustomerPayload & {
  customerID: number;
}

/**
 * Order Response
 */
export type Order = {
  orderID: number;
  customer: Customer;
  orderDetail: string;
  orderDate: number;
  orderAmount: number;
}

/**
 * Heirarchy Data
 */
export type TreeData = {
  nodeId: string;
  nodeName: string;
  children?: TreeData[];
};