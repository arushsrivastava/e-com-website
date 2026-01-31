import Card from 'react-bootstrap/Card';

function BasicCard({title}) {
  return (
    <Card style={{ width: '21rem' }} className="border-0 shadow-sm p-0 ">
      <Card.Body>
        <Card.Title className='mb-3 fw-bold text-left min-h-14'>{title}</Card.Title>
        <div className="grid grid-cols-2 grid-rows-2 gap-3">
            <img src="https://thumbs.dreamstime.com/z/%C3%B0%C2%9Doung-man-light-suit-white-background-17475269.jpg?ct=jpeg" className="w-full h-30 object-cover" alt="" />
            <img src="https://thumbs.dreamstime.com/z/%C3%B0%C2%9Doung-man-light-suit-white-background-17475269.jpg?ct=jpeg" className="w-full h-30 object-cover" alt="" />
            <img src="https://thumbs.dreamstime.com/z/%C3%B0%C2%9Doung-man-light-suit-white-background-17475269.jpg?ct=jpeg" className="w-full h-30 object-cover" alt="" />
            <img src="https://thumbs.dreamstime.com/z/%C3%B0%C2%9Doung-man-light-suit-white-background-17475269.jpg?ct=jpeg" className="w-full h-30 object-cover" alt="" />
        </div>
        <button style={{fontSize:'12px'}} className="block mt-4 text-blue-600 font-medium">
            See more deals
        </button>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;