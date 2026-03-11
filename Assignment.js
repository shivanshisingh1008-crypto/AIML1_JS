// find the greatest of three numbers

 let n1 = 10, n2 = 25, n3 = 15;
        
        
        let max = (n1 > n2) ? (n1 > n3 ? n1 : n3) : (n2 > n3 ? n2 : n3);
        
        
        document.write("Largest number among " + n1 + ", " + n2 + " and " + n3 + " is " + max + ".");