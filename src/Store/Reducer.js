// import * as actionTypes from'./Actions'

const initialState={
            medicines : [
               {
                id: 1, 
                Name: 'Sinarest',
                Type: 'Tablet',
                Price: '5',
                Composition: 'Paracetamol IP:500 mg, Phenylephrine hydrochloride IP:10 mg, Chlorpheniramine maleate IP:2 mg, Caffeine (anhydrous) IP:30 mg'
            },
            { 
                id: 2,
                Name: 'A',
                Type: 'Syrup',
                Price: '225',
                Composition: 'Paracetamol IP:500 mg, Phenylephrine hydrochloride IP:10 mg, Chlorpheniramine maleate IP:2 mg, Caffeine (anhydrous) IP:30 mg'
            },
            { 
                id: 3,
                Name: 'B',
                Type: 'Syrup',
                Price: 'Rs. 5',
                Composition: 'Paracetamol IP:500 mg, Phenylephrine hydrochloride IP:10 mg, Chlorpheniramine maleate IP:2 mg, Caffeine (anhydrous) IP:30 mg'
            },
            { 
                id: 4,
                Name: 'C',
                Type: 'Tablet',
                Price: '5',
                Composition: 'Paracetamol IP:500 mg, Phenylephrine hydrochloride IP:10 mg, Chlorpheniramine maleate IP:2 mg, Caffeine (anhydrous) IP:30 mg'
            },
            { 
                id: 5,
                Name: 'D',
                Type: 'Capsule',
                Price: '5',
                Composition: 'Paracetamol IP:500 mg, Phenylephrine hydrochloride IP:10 mg, Chlorpheniramine maleate IP:2 mg, Caffeine (anhydrous) IP:30 mg'
            },
            { 
                id: 6,
                Name: 'E',
                Type: 'Tablet',
                Price: '5',
                Composition: 'Paracetamol IP:500 mg, Phenylephrine hydrochloride IP:10 mg, Chlorpheniramine maleate IP:2 mg, Caffeine (anhydrous) IP:30 mg'
            },
            {   
                id: 7,
                Name: 'F',
                Type: 'Tablet',
                Price: '15',
                Composition: 'Paracetamol IP:500 mg, Phenylephrine hydrochloride IP:10 mg, Chlorpheniramine maleate IP:2 mg, Caffeine (anhydrous) IP:30 mg'
            },{ 
                id: 8,
                Name: 'Dolo',
                Type: 'Capsule',
                Price: '5',
                Composition: 'Paracetamol IP:500 mg'
        },
        { 
                id: 9,
                Name: 'G',
                Type: 'Tablet',
                Price: '25',
                Composition: 'Paracetamol IP:500 mg, Phenylephrine hydrochloride IP:10 mg, Chlorpheniramine maleate IP:2 mg, Caffeine (anhydrous) IP:30 mg'
            },
            { 
                id: 10,
                Name: 'H',
                Type: 'Tablet',
                Price: '5',
                Composition: 'Paracetamol IP:500 mg'
            },
            { 
                id: 11,
                Name: 'I',
                Type: 'Syrup',
                Price: '15',
                Composition: 'Paracetamol IP:500 mg, Phenylephrine hydrochloride IP:10 mg, Chlorpheniramine maleate IP:2 mg, Caffeine (anhydrous) IP:30 mg'
            },
            { 
                id: 12,
                Name: 'J',
                Type: 'Tablet',
                Price: '5',
                Composition: 'Paracetamol IP:500 mg, Phenylephrine hydrochloride IP:10 mg, Chlorpheniramine maleate IP:2 mg, Caffeine (anhydrous) IP:30 mg'
            },
            { 
                id: 13,
                Name: 'K',
                Type: 'Tablet',
                Price: '5',
                Composition: 'Paracetamol IP:500 mg'
            }
        ],
            medSearchedByUser: '',
            searchButton:true,
            generics : [
                {
                 id: 1, 
                 Name: 'Gen Sinarest',
                 Type: 'Tablet',
                 Price: '2',
                 Composition: 'Paracetamol IP:500 mg, Phenylephrine hydrochloride IP:10 mg, Chlorpheniramine maleate IP:2 mg, Caffeine (anhydrous) IP:30 mg'
             },
             
             { 
                 id: 13,
                 Name: 'Generic K',
                 Type: 'Tablet',
                 Price: '1',
                 Composition: 'Paracetamol IP:500 mg'
             }
         ],
};

const reducer= (state = initialState, action) => {
                    if (action.type === 'seaerchedMed') {
                        return {
                         ...state,
                         medSearchedByUser:action.Value,
                         searchButton:false
                        }
                    }
                    return state;


};

export default reducer;