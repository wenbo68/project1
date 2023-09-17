import { formatDistanceToNow } from "date-fns";

const date = "2001-05-26 10:00:00";
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago i was born`;