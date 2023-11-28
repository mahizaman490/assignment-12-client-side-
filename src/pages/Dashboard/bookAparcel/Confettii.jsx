
import Confetti from 'react-confetti';

const Confettii = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Your Confetti Explosion */}
      <Confetti
        width={800}
        height={600}
        numberOfPieces={200}
        recycle={false}
        colors={['#FF4500', '#FFD700', '#008000', '#4B0082', '#00FFFF']}
      />
      
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Celebration Time!</h2>
        <p className="text-lg">Your payment was successful!</p>
      </div>

      
    </div>
  );
};

export default Confettii;
