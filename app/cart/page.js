

export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta']
  return (
    <div>
      <h4 className="title">장바구니</h4>
      <CartItem item={장바구니[0]}/>
      <CartItem item={장바구니[1]}/>
      <Banner content="롯데카드"/>
      <Btn color="blue"/>
    </div>
  );
}


function CartItem(props) {
  return(
    <div className="cart-item">
    <p>{props.item}</p>
    <p>$40</p>
    <p>1개</p>
  </div>
  )
}


function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>
}


function Btn(props) {
  return <button style={{background : props.color}}>버튼</button>
}