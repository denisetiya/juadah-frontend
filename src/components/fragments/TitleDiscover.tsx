import Button from "../widgets/Button"

const TitleDiscover =() => {
  return (
    <div className="h-screen w-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row justify-between w-full">
            <div className="max-w-[600px] mt-4  order-last lg:order-first">
                <div className="text-4xl lg:text-8xl font-bold text-[#1B6270]">
                    Bibendum et sit aliquam!
                </div>
                <div className="text-sm md:text-normal text-slate-500 font-semibold mt-6 md:mt-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
                </div>

                <div className="max-w-[192px] mt-10 bg-[#DD9BA3] hover:bg-[#f3bfc5] rounded-full">
                    <Button name="Discover Menu" />
                </div>
            </div>
            <div className="mt-28 md:mt-0">
                <img src="https://via.placeholder.com/372x372"  alt="" className="rounded-3xl"/>
            </div>
        </div>
    </div>
  )
}

export default TitleDiscover
