function formatDuration (seconds) {
let durations = [
 {unit: 'year', value:31536000},
  {unit: 'day', value:86400},
{unit: 'hour', value:3600},
{unit: 'minute', value:60},
{unit: 'second', value:1}
]
if( seconds===0)return 'now'
let pushed= []
for(let {unit, value} of durations){
  const count = Math.floor(seconds/value)
  seconds%=value
 if(count>0){
   pushed.push(`${count} ${unit}${count>1?'s':''}`)
 }
}
  
  return pushed.length===1?pushed[0]:pushed.slice(0,-1).join(', ')+ ' and ' + pushed.slice(-1)
}
​