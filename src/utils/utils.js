class Utils {
  static filterArrayByText(arr, searchText) {
    if (searchText === '') return arr
    searchText = searchText.toLowerCase()
    return arr.filter((elem) => this.searchInObj(elem, searchText))
  }

  static searchInObj(objValue, text) {
    if (!objValue) return false

    const props = Object.keys(objValue)

    for (let index = 0; index < props.length; index++) {
      const key = props[index]
      const value = objValue[key]

      if (typeof value === 'string') {
        if (this.searchInString(value, text)) {
          return true
        }
      }

      if (Array.isArray(value)) {
        if (this.searchInArray(value, text)) {
          return true
        }
      }
      if (typeof value === 'object') {
        if (this.searchInObj(value, text)) {
          return true
        }
      }
    }
    return false
  }

  static searchInArray(array, searchText) {
    array.forEach((elem) => {
      if (typeof elem === 'string') {
        if (this.searchInString(elem, searchText)) {
          return true
        }
      }

      if (typeof elem === 'object') {
        if (this.searchInObj(elem, searchText)) {
          return true
        }
      }
      return false
    })
    return false
  }

  static searchInString(value, searchText) {
    return value.toLowerCase().includes(searchText)
  }
}

export default Utils
