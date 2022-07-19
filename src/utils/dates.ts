import * as dayjs from "dayjs";

export const parseDate = (isoDate: string): string => {
  return dayjs(isoDate).format('D MMM YYYY');
}
