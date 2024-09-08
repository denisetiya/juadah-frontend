import GoogleIcon from "../../assets/google-icon.png"
import AppleIcon from "../../assets/apple-icon.png"
import FacebookIcon from "../../assets/fb-icon.png"

function AlternateLogin() {
  return (
    <div className="my-10">
      <p className="flex items-center justify-center gap-4">
        <span className="flex-1 border-t border-slate-300"></span>
        <span className="px-2 text-slate-500 text-xs">or do it via other account</span>
        <span className="flex-1 border-t border-slate-300"></span>
      </p>

      <div className="flex gap-4 justify-center my-4">
        <div className="rounded-full transition-shadow duration-300 shadow-lg p-4 border hover:shadow-[#f3bfc5]">
          <img src={GoogleIcon} alt="" />
        </div>

        <div className="rounded-full shadow-lg p-4 border transition-shadow duration-300 hover:shadow-[#f3bfc5]">
          <img src={AppleIcon} alt="" />
        </div>

        <div className="rounded-full shadow-lg p-4 px-6 border transition-shadow duration-300 hover:shadow-[#f3bfc5]">
          <img src={FacebookIcon} alt="" />
        </div>
        
      </div>

    </div>
  )
}

export default AlternateLogin
