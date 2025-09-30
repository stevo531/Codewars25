function dirReduc(arr){
  let obj = {
    NORTH : 'SOUTH',
    SOUTH : 'NORTH',
    WEST : 'EAST',
    EAST : 'WEST'
  }
  if(arr.length <= 1) return arr
  return arr.reduce((dirs,dir) =>{
  dirs[dirs.length - 1] !== obj[dir]
      ? dirs.push(dir)
      : dirs.pop();
    return dirs;
  }, []);
}