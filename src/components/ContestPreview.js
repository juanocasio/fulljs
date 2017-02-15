import React from 'react'

const ContestPreiew = (contest) => (
<div className="ContestPreview">
  <div className="category-name">
    {contest.categoryName}
  </div>
  <div className="contest-name">
    {contest.contestName}
  </div>
</div>
);

export default ContestPreiew;