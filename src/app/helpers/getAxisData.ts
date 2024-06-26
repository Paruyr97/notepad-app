import { Note, Notes } from "../../interfaces/note"

export function getAxisData(notes: Notes): [string[], number[]] {
    const data: {
        [key: string]: number
    } = {};

    Object.values(notes).forEach(note => {
    
    if (data[note.createdAt]) {
        ++data[note.createdAt];
    } else {
        data[note.createdAt] = 1;
    }
    });      
  
    const creationDates = Object.entries(data);
    creationDates.sort((a ,b) => a[0] > b[0] ? 1 : -1);
    
    const categories: string[] = creationDates.map(item => item[0]);
    const dataPoints: number[] = [];
    let current = 0;
    creationDates.forEach(item => {
        current += item[1];
        dataPoints.push(current);
    });

    return [categories, dataPoints];
}