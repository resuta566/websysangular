import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yeonwoo'
})
export class YeonwooPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      return null;
    }
    // short list
    const prepositions = [
      'with','at','from','into','during','including','until','against','among','throughout','despite','towards','upon','concerning','of','to','in',
      'for','on','by','about','like','through','over','before','between','after','since','without','under','within','along',
      'following','across','behind','beyond', 'plus', 'except','but','up','out','around','down','off','above','near',
      'a', 'an', 'and', 'as', 'at', 'but', 'by', 'en', 'for', 'if', 'in', 'nor', 'of', 'on', 'or', 'per', 'the', 'to', 'via','is','this'
    ];

    const words = value.split(' ');

    for (let i = 0; i < words.length; i++) {
      if (i > 0 && prepositions.includes(words[i].toLowerCase())) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
      }
    }
    return words.join(' ');
  }
}