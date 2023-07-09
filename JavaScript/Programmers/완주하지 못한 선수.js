function solution(participant, completion) {
    
    const answer = new Map()
    
    for (let i = 0;  i < participant.length; i++) {
        answer.set(participant[i] , (answer.get(participant[i]) || 0 )+ 1)
    }
    for  (let i =0; i < completion.length;  i++ ) {
        answer.set(completion[i], answer.get(completion[i]) -1)
    }    

    
    for ( let i= 0; i <  participant.length; i++){ 
        if(answer.get(participant[i]) !==0) {
            return participant[i]
        }
    }

}