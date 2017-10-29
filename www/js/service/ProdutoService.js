angular.module('starter')
    .service('ProdutoService', function(BaseService, route){
        var url = route.concat('/api/produto');

        this.save = save;
        this.getList = getList;
        this.getById = getById;
        this.deleteById = deleteById;

        function getList() {
            return BaseService.get(url);
        };

        function save(produto) {
            return BaseService.post(url, produto);
        };

        function deleteById(id) {
            return BaseService.delete(url + '/' + id);
        };

        function getById(id) {
            return BaseService.get(url + '/' + id);
        };
});