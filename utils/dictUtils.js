import request from '@/request.js'

async function getDictData(dictType){
 	let res=await request('/system/dict/data/type/'+dictType,"get")
	return res.data
}

export default async function getDictLabel(dictType,dictValue) {
  let dictList=await getDictData(dictType)
  const dictItem = dictList.find((item) => item.dictValue === dictValue);
  return dictItem ? dictItem.dictLabel : '';
}