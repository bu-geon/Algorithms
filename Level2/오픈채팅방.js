function solution(records) {
  const result = [];
  const visitors = {};
  const messages = { Enter: '님이 들어왔습니다.', Leave: '님이 나갔습니다.' };

  records.forEach((record) => {
    const [type, uid, nickName] = record.split(' ');

    if (type !== 'Leave') {
      visitors[uid] = nickName;
    }

    if (type !== 'Change') {
      result.push({ uid: uid, type: type });
    }
  });

  return result.map((el) => visitors[el.uid] + messages[el.type]);
}

const record = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];

console.log(solution(record));
