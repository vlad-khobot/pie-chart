import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  icon: {
    boxSizing: "border-box",
    position: "absolute",
    right: "7px",
    top: "8px",
  }
}));

export default function AddUserIcon() {
  const classes = useStyles();

  return (
    <div className={classes.icon}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="18" height="18" rx="4" fill="white" fillOpacity="0.2" />
        <rect x="0.5" y="0.5" width="17" height="17" rx="3.5" stroke="white" strokeOpacity="0.2" />
        <path d="M12.807 12.1608C12.5771 11.5995 12.2434 11.0896 11.8246 10.6595C11.407 10.2283 10.9123 9.88443 10.3679 9.64699C10.363 9.64447 10.3581 9.64322 10.3533 9.6407C11.1127 9.07538 11.6064 8.15452 11.6064 7.11558C11.6064 5.39447 10.2533 4 8.58333 4C6.91335 4 5.5603 5.39447 5.5603 7.11558C5.5603 8.15452 6.05398 9.07538 6.8134 9.64196C6.80852 9.64447 6.80365 9.64573 6.79877 9.64824C6.25268 9.88568 5.76265 10.2261 5.34211 10.6608C4.92365 11.0912 4.59001 11.601 4.35962 12.1621C4.13329 12.7114 4.01122 13.3003 4.00003 13.897C3.99971 13.9104 4.00199 13.9237 4.00674 13.9362C4.0115 13.9487 4.01863 13.9601 4.02772 13.9697C4.0368 13.9793 4.04766 13.9869 4.05966 13.9921C4.07165 13.9973 4.08453 14 4.09755 14H4.82893C4.88256 14 4.92522 13.956 4.92644 13.902C4.95082 12.9322 5.3287 12.0239 5.99669 11.3354C6.68784 10.6231 7.60572 10.2312 8.58333 10.2312C9.56094 10.2312 10.4788 10.6231 11.17 11.3354C11.838 12.0239 12.2158 12.9322 12.2402 13.902C12.2414 13.9573 12.2841 14 12.3377 14H13.0691C13.0821 14 13.095 13.9973 13.107 13.9921C13.119 13.9869 13.1299 13.9793 13.139 13.9697C13.148 13.9601 13.1552 13.9487 13.1599 13.9362C13.1647 13.9237 13.167 13.9104 13.1666 13.897C13.1544 13.2965 13.0338 12.7123 12.807 12.1608ZM8.58333 9.27638C8.02383 9.27638 7.49724 9.05151 7.10107 8.64322C6.70491 8.23492 6.48672 7.69221 6.48672 7.11558C6.48672 6.53894 6.70491 5.99623 7.10107 5.58794C7.49724 5.17965 8.02383 4.95477 8.58333 4.95477C9.14284 4.95477 9.66943 5.17965 10.0656 5.58794C10.4618 5.99623 10.68 6.53894 10.68 7.11558C10.68 7.69221 10.4618 8.23492 10.0656 8.64322C9.66943 9.05151 9.14284 9.27638 8.58333 9.27638Z" fill="#D1D5E0" />
        <mask id="path-4-outside-1" maskUnits="userSpaceOnUse" x="9" y="7" width="5" height="5" fill="black">
          <rect fill="white" x="9" y="7" width="5" height="5" />
          <path fillRule="evenodd" clipRule="evenodd" d="M11.5 8C11.2929 8 11.125 8.16789 11.125 8.375V9.125H10.375C10.1679 9.125 10 9.29289 10 9.5C10 9.70711 10.1679 9.875 10.375 9.875H11.125V10.625C11.125 10.8321 11.2929 11 11.5 11C11.7071 11 11.875 10.8321 11.875 10.625V9.875H12.625C12.8321 9.875 13 9.70711 13 9.5C13 9.29289 12.8321 9.125 12.625 9.125H11.875V8.375C11.875 8.16789 11.7071 8 11.5 8Z" />
        </mask>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.5 8C11.2929 8 11.125 8.16789 11.125 8.375V9.125H10.375C10.1679 9.125 10 9.29289 10 9.5C10 9.70711 10.1679 9.875 10.375 9.875H11.125V10.625C11.125 10.8321 11.2929 11 11.5 11C11.7071 11 11.875 10.8321 11.875 10.625V9.875H12.625C12.8321 9.875 13 9.70711 13 9.5C13 9.29289 12.8321 9.125 12.625 9.125H11.875V8.375C11.875 8.16789 11.7071 8 11.5 8Z" fill="#606063" />
        <path d="M11.125 9.125V9.625H11.625V9.125H11.125ZM11.125 9.875H11.625V9.375H11.125V9.875ZM11.875 9.875V9.375H11.375V9.875H11.875ZM11.875 9.125H11.375V9.625H11.875V9.125ZM11.625 8.375C11.625 8.44404 11.569 8.5 11.5 8.5V7.5C11.0168 7.5 10.625 7.89175 10.625 8.375H11.625ZM11.625 9.125V8.375H10.625V9.125H11.625ZM10.375 9.625H11.125V8.625H10.375V9.625ZM10.5 9.5C10.5 9.56904 10.444 9.625 10.375 9.625V8.625C9.89175 8.625 9.5 9.01675 9.5 9.5H10.5ZM10.375 9.375C10.444 9.375 10.5 9.43096 10.5 9.5H9.5C9.5 9.98325 9.89175 10.375 10.375 10.375V9.375ZM11.125 9.375H10.375V10.375H11.125V9.375ZM11.625 10.625V9.875H10.625V10.625H11.625ZM11.5 10.5C11.569 10.5 11.625 10.556 11.625 10.625H10.625C10.625 11.1082 11.0168 11.5 11.5 11.5V10.5ZM11.375 10.625C11.375 10.556 11.431 10.5 11.5 10.5V11.5C11.9832 11.5 12.375 11.1082 12.375 10.625H11.375ZM11.375 9.875V10.625H12.375V9.875H11.375ZM12.625 9.375H11.875V10.375H12.625V9.375ZM12.5 9.5C12.5 9.43096 12.556 9.375 12.625 9.375V10.375C13.1082 10.375 13.5 9.98325 13.5 9.5H12.5ZM12.625 9.625C12.556 9.625 12.5 9.56904 12.5 9.5H13.5C13.5 9.01675 13.1082 8.625 12.625 8.625V9.625ZM11.875 9.625H12.625V8.625H11.875V9.625ZM11.375 8.375V9.125H12.375V8.375H11.375ZM11.5 8.5C11.431 8.5 11.375 8.44404 11.375 8.375H12.375C12.375 7.89175 11.9832 7.5 11.5 7.5V8.5Z" fill="#D1D5E0" mask="url(#path-4-outside-1)" />
      </svg>

    </div>
  );
}
