const helpers = {
    default: function(){
        $(document).ready(function(){
            var h = helpers;
            h.calculateLine();
            h.Login_check();
            h.Api_check();
        })
    },
    calculateLine: function(){
        console.log('Grid_Helper');
    },
    alert:function(label,message) {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "3000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
        toastr.error(label,message)  
    },
    Login_check: function(){
        console.log('Login_check')
    },
    Api_check: function(){
        console.log('Api_Check')
    }
}

export default helpers;