import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customdate'
})

export class CustomDatePipe implements PipeTransform {
    transform(value: string, format: string): any {
        let dt = new Date(value);
        if(format == "date") {
            return dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
        }
        else if(format == "month") {
            return this.getMonthName(dt.getMonth());
        }
        else if(format == "year") {
            return dt.getFullYear();
        }
        return ""
    }

    getMonthName(month) {
        let monthNamesEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return monthNamesEn[month];
    }
}