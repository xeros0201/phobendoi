




export const toVND = (data:any) =>{
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(data)
  }