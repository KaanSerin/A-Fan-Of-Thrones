export const valueOrDefault = (value, message = "None") =>
  value ? value : message;

export const listOrDefault = (value, message = "None") =>
  value.length > 0
    ? value.map((v, index) => <li key={index}>{v}</li>)
    : message;
