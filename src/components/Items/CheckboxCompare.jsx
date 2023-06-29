import { AiFillCheckCircle } from 'react-icons/ai'

function CheckboxCompare() {
    return ( 
        <label className="flex items-center checkbox-compare relative cursor-pointer w-fit">
          <input type="checkbox" className="cursor-pointer" />
          <AiFillCheckCircle className="absolute top-[16%] w-[17px] h-[17px] text-[#3246ff] hidden" />
          <p className="p-0">So sánh</p>
        </label>
     );
}

export default CheckboxCompare;