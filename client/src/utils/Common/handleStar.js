import icons from '../icons';

const { IoIosStar } = icons;

export const handleStart = star => {
  let stars = [];
  for (let i = 1; i <= star; i++) stars.push(<IoIosStar color="#FEBB00" className="star-item" key={i} size={25} />);
  return stars;
};
