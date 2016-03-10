import React from 'react'

export default ({item, index}) => (
  <div className="card">
    <div className="card-block">
      <h4 className="card-title">{item.gsx$title.$t}</h4>
      <h6 className="card-subtitle text-muted">{item.gsx$period.$t} {item.gsx$client.$t}</h6>
    </div>
    <img className={item.gsx$image.$t ? 'card-img-top img-fluid' : 'invisible'} src={item.gsx$image.$t} alt={item.gsx$imagealt.$t} />
    <div className="card-block">
      <p className={item.gsx$description.$t ? 'card-text' : 'invisible'} dangerouslySetInnerHTML={createMarkup(item.gsx$description.$t)} />
      <p className={item.gsx$stacks.$t ? 'card-text' : 'invisible'}>{listStacks(item.gsx$stacks.$t).map((stack, index) => (
        <button type="button" className="btn-sm btn-secondary" key={index}>{stack}</button>
      ))}</p>
      <a href={item.gsx$link.$t} className="btn btn-primary card-link">Demo</a>
      <a href={item.gsx$sourcecode.$t} className={item.gsx$sourcecode.$t ? 'card-link' : 'invisible'} >Code</a>
    </div>
  </div>
);

const listStacks = (stringText) => {
  let arr = stringText.split(", ")
  console.log(arr);
  return arr
}

const createMarkup = (htmlString) => {
  return {__html : htmlString}
}