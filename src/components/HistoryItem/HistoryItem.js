import PropTypes from "prop-types";
import s from "./HistoryItem.module.css";

const HistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tr>
      <td className={s.td}>{type}</td>
      <td className={s.td}>{amount}</td>
      <td className={s.td}>{currency}</td>
    </tr>
  );
};

HistoryItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default HistoryItem;
