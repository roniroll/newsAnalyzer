class DataStorage {
  constructor(data) {
    data = this.data
  }

  saveDataStorage (data) {
    const dataInfo = localStorage.setItem(data)
    return dataInfo
  }

}
