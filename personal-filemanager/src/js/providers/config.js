(function(angular) {
    'use strict';
    angular.module('FileManagerApp').provider('fileManagerConfig', function() {

        var values = {
            appName: 'EKB',
            defaultLang: 'zh',
            listUrl: 'personal-filemanager/bridges/php/handler.php',
            uploadUrl: 'personal-filemanager/bridges/php/handler.php',
            renameUrl: 'personal-filemanager/bridges/php/handler.php',
            copyUrl: 'personal-filemanager/bridges/php/handler.php',
            moveUrl: 'personal-filemanager/bridges/php/handler.php',
            removeUrl: 'personal-filemanager/bridges/php/handler.php',
            editUrl: 'personal-filemanager/bridges/php/handler.php',
            getContentUrl: 'personal-filemanager/bridges/php/handler.php',
            createFolderUrl: 'personal-filemanager/bridges/php/handler.php',
            downloadFileUrl: 'personal-filemanager/bridges/php/handler.php',
            downloadMultipleUrl: 'personal-filemanager/bridges/php/handler.php',
            compressUrl: 'personal-filemanager/bridges/php/handler.php',
            extractUrl: 'personal-filemanager/bridges/php/handler.php',
            permissionsUrl: 'personal-filemanager/bridges/php/handler.php',

            searchForm: true,
            sidebar: true,
            breadcrumb: true,
            allowedActions: {
                upload: true,
                rename: true,
                move: true,
                copy: true,
                edit: true,
                changePermissions: true,
                compress: true,
                compressChooseName: true,
                extract: true,
                download: true,
                downloadMultiple: true,
                preview: true,
                remove: true,
                createFolder: true,
                pickFiles: false,
                pickFolders: false
            },

            multipleDownloadFileName: 'angular-filemanager.zip',
            showExtensionIcons: true,
            showSizeForDirectories: false,
            useBinarySizePrefixes: false,
            downloadFilesByAjax: true,
            previewImagesInModal: true,
            enablePermissionsRecursive: true,
            compressAsync: false,
            extractAsync: false,
            pickCallback: null,

            isEditableFilePattern: /\.(txt|diff?|patch|svg|asc|cnf|cfg|conf|html?|.html|cfm|cgi|aspx?|ini|pl|py|md|css|cs|js|jsp|log|htaccess|htpasswd|gitignore|gitattributes|env|json|atom|eml|rss|markdown|sql|xml|xslt?|sh|rb|as|bat|cmd|cob|for|ftn|frm|frx|inc|lisp|scm|coffee|php[3-6]?|java|c|cbl|go|h|scala|vb|tmpl|lock|go|yml|yaml|tsv|lst)$/i,
            isImageFilePattern: /\.(jpe?g|gif|bmp|png|svg|tiff?)$/i,
            isExtractableFilePattern: /\.(gz|tar|rar|g?zip)$/i,
            tplPath: 'personal-filemanager/src/templates'
        };

        return {
            $get: function() {
                return values;
            },
            set: function (constants) {
                angular.extend(values, constants);
            }
        };

    });
})(angular);
