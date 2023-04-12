import Pool from './Pool';

const StakingPool = () => {
  return (
    <div className='mx-auto flex flex-wrap justify-center gap-8'>

      <Pool day={14} percent={15} />

      {/* box 2  */}

      <Pool day={30} percent={35}/>

    </div>
  );
};

export default StakingPool;