function Archiver() {
    var temperature = null;
    var archive = [];
Object.defineProperty(this, 'temperature', {
  get() {
    return temperature
  },
  set(value) {
  temperature = value
  archive.push({
    date: new Date(),
    val: temperature
  })
}
})
  
    //TODO: implement "Archiver" as a self-archiving object
    //...ensure that when "temperature" property is
    //...set, that the array returned by getArchive
    //...gets a log entry in the form of {date:,val:}
    this.getArchive = function() {return archive;};
}