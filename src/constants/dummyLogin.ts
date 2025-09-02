export type LoginDataType = {
  id: number;
  code: number;
  role: string;
  name: string;
};

export const loginData: LoginDataType[] = [
  {
    id: 1,
    code: 456,
    role: "admin",
    name: "Admin",
  },
  {
    id: 2,
    code: 123,
    role: "staff",
    name: "Staff",
  },
  {
    id: 3,
    code: 789,
    role: "manager",
    name: "Manager",
  },
];
