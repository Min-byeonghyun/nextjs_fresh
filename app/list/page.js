

export default function List() {

  let 상품 = ['Tomato','Pasta','Coconut']


  return(
    <div>
      <h3 className="title">상품목록</h3>
      {
        상품.map((a, i)=> {
          return (
            <div className="food" key={i}>
              <img src={`/food${i}.png`} className="food-img"/>
            <h4>{a} $40</h4>
          </div>
          )
        })
      }
    </div>
  )
}