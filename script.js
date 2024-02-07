dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);
dayjs.locale("pt-br");
MicroModal.init();

const hour = document.querySelector(".hour");
const date = document.querySelector(".date");
const timeZone = document.querySelector(".timezone");
const select = document.querySelector(".seletor");
const btn = document.querySelector(".apply-button");

selectTimezone()
btn.addEventListener("click", selectTimezone)

function selectTimezone() {
  switch (select.value) {
    case "sp":
      timezone = "America/Sao_Paulo";
      break;
    case "ny":
      timezone = "America/New_York";
      break;
    case "london":
      timezone = "Europe/London";
      break;
    case "paris":
      timezone = "Europe/Paris";
      break;
    case "tokyo":
      timezone = "Asia/Tokyo";
      break;
    case "sydney":
      timezone = "Australia/Sydney";
      break;
    default:
      timezone = "America/Sao_Paulo";
      break;
  }
const now = dayjs().tz(timezone).format("HH:mm:ss");
let dayWeek = dayjs().tz(timezone).format("dddd");
let dayMonth = dayjs().tz(timezone).format("DD");
let month = dayjs().tz(timezone).format("MMMM");
let year = dayjs().tz(timezone).format("YYYY");
dayWeek = dayWeek.charAt(0).toUpperCase() + dayWeek.slice(1);
month = month.charAt(0).toUpperCase() + month.slice(1);

hour.textContent = now;
date.textContent = `${dayWeek}, ${dayMonth} de ${month} de ${year}`;
timeZone.textContent = timezone;
}
