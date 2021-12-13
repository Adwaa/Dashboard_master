    
    
    // Toggle the side navigation  
    const sidebarToggle = document.body.querySelector('#sidebarToggle');

    
    $(document).ready(function() {
        $('#myTable').DataTable( {
            'ajax': '../json/data.json',
            'columns' : [
                {'data' :  'name'},
                {'data' : 'address'},
                {'data' : 'city'},
                {'data' : 'age'},
                {'data' : 'last visit'},
                {'data' : 'orders'}
                
            ]
        } ); 
    });
    