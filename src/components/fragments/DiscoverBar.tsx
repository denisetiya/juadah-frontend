import { GpsFix, MoneyWavy ,FunnelSimple} from "@phosphor-icons/react"


function DiscoverBar() {
  return (
    <div className="w-full lg:flex-row flex-col flex lg:gap-20  items-center justify-between">
        <div className="flex gap-10 items-center">
            <div className="flex gap-2">
                <GpsFix size={20} />
                Location Name
            </div>

            <div className="flex gap-1 items-center">

                <MoneyWavy size={20} />
            <select name="category" id="" className="w-full py-1 pr-6 rounded-2xl bg-transparent focus:outline-none">
                <option value="best deals"> Best Deals</option>
                <option value="all">All</option>
                <option value="discount">Discount</option>
            </select>
            </div>
        </div>

        <div className="flex gap-2 ">
            <div className="w-96">
            <input type="search" placeholder="Search for anything" className="w-full py-1 bg-[#F7F7F7] px-4 rounded-2xl bg-transparent focus:outline-[#f5bbc1]"/>
            </div>

            <div className="bg-black rounded-md cursor-pointer">
                <FunnelSimple size={30} className="text-white p-1"/>
            </div>
        </div>

    </div>
  )
}

export default DiscoverBar