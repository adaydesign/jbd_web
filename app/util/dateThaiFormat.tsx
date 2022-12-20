export const dateThaiFormat = (dateString: string) => {
  if (!dateString) {
    return dateString;
  }

  const dt = new Date(dateString);
  // const options:any = { year: "numeric", month: "short", day: "numeric",hour:"numeric",minute:"numeric", second:"numeric" };
  const options: any = { year: "numeric", month: "short", day: "numeric" };
  const dateThai = dt.toLocaleDateString("th-TH", options);
  return dateThai;
};
export const dateThaiShortFormat = (dateString: string) => {
  if (!dateString) {
    return dateString;
  }

  const dt = new Date(dateString);
  const options: any = {
    year: "numeric",
    month: "numeric",
    day: "numeric",

  };
  const dateThaiShort = dt.toLocaleDateString("th-TH", options);
  return dateThaiShort;
};

export const dateThaiTimeFormat = (dateString: string) => {
  if (!dateString) {
    return dateString;
  }

  const dt = new Date(dateString);
  const options: any = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const dateThaiTime = dt.toLocaleDateString("th-TH", options);
  return dateThaiTime;
};
