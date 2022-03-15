 /********************************remove an specefic item ************************/
 console.log (' \n *****************remove an specefic item : \n ');
 function removeItem  (item,arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            for (var j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length = arr.length - 1
            return;
        }
    }
}
var arr = [ 1,3,4,2 ];
console.log (' \n \n le tableau avant la suppression : \n ');
console.table (arr); 
removeItem(3,arr);
console.log(' \n \n le tableau aprés  la suppression : \n ');
console.table (arr);


/*************remouve a duplicate number *************************** */

function remove_dup  (arr) {
    const longeur = arr.lentgh;
  if (longeur === 0) { return 0; }
  var j=1; 
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            for (var j = i; j < arr.length ; j++) {
                arr[j] = arr[j + 1];
                arr.length = arr.length - 1
            }
            
            return;
        }

        }
 }
 var arr  = [ 1,1 ,23,1 ,23]
 var lol = [ 1,3,3,124 ,23,1 ,23,124]
 console.log (' \n ***************** duplicate num: *****************\n ');
console.log (' \n \n le tableau avant la suppression : \n ');
console.table (arr); 
remove_dup(arr);
console.log(' \n \n le tableau aprés  la suppression : \n ');
console.table (arr);
            
console.log (' \n \n le tableau avant la suppression : \n ');
console.table (lol); 
remove_dup(lol);
console.log(' \n \n le tableau aprés  la suppression : \n ');
console.table (lol);
