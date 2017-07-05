import Realm from 'realm';

export default class DiaryRealm {
    constructor() {
        this.realm = new Realm({schema: [DiarySchema]});
    }

    create(data){
        var realm = this.realm;
        realm.write(()=> {
            realm.create('Diary', data);
        });
    }

    update(data) {
        var realm = this.realm;
        realm.write(()=> {
            realm.create('Diary', data, true);
        });
    }

    delete(diaryId) {
        var realm = this.realm;
        res = realm.delete(realm.objects('Diary').filtered('id == $0', diaryId));
    }

    getDiaryByYearMonth(year, month) {
        var realm = this.realm;
        return realm.objects('Diary').filtered('year == $0 and month == $1', year, month).sorted('day', true);
    }

    getNextId(){
        var realm = this.realm;
        return realm.objects('Diary').length+1;
    }
}

const DiarySchema = {
    name: 'Diary',
    primaryKey: 'id',
    properties: {
        id: 'int',
        year: {type: 'int', indexed: true},
        month: {type: 'int', indexed: true},
        day: 'int',
        content: 'string'
    }
};
