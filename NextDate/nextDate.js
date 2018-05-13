function NextDate(year, month, day){
    days = [0,31,28,31,30,31,30,31,31,30,31,30,31];

    year = parseInt(year);
    month = parseInt(month);
    day = Number(day);

    if(year < 1900 || year>2025 || month<1 || month>12) return 'Out of range value';
    //if( (year%400==0) || (year%4==0 && year%100!=0)) days[2]+1; //閏年
    if(year%4==0) days[2]+=1;

    if(month===12 && day===31) output = `${year+1}/1/1`;
    else if(day === days[month]) output = `${year}/${month+1}/1`;
    
    else output = `${year}/${month}/${day+1}`
    
    if( day<1 || day>31) return 'Out of range value';
    else if(day > days[month]) return 'Invalid date';
    
    return output;
}

module.exports = NextDate;

