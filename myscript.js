
            function insert_in_textview(no)
            {
                document.myform.textview.value = document.myform.textview.value+no;
            }

            function cln()
            {
                document.myform.textview.value = "";
            }

            function cal()
            {
                    var expression = document.myform.textview.value; 
                    if(expression)
                        {
                            document.myform.textview.value=eval(expression);  // eval is inbuilt function to calculate 
                        }
            }

    