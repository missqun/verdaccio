export default function (string) {
   let val = String(string)
   return  val.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
}