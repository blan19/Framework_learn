import React, { useState, VFC } from 'react';

const SummaryPage: VFC = () => {
  const [disable, setDisable] = useState(false);

  const onHandleDisable = (e: any) => setDisable(e.target.checked);
  return (
    <div>
      <input
        type="checkbox"
        id="confirm-checkbox"
        checked={disable}
        onChange={onHandleDisable}
      />
      <label htmlFor="confirm-checkbox">주문을 확인하셨나요?</label>
      <br />
      <button type="submit" disabled={!disable}>
        주문 확인
      </button>
    </div>
  );
};

export default SummaryPage;
