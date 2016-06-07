ko.components.register('breadcrumb', {
    viewModel: function (params) {
        var self = this;

        self.breadcrumbs = params.crumbs;

        if (params.selected) {
            self.selected = params.selected;
            if (!ko.unwrap(params.selected)) {
                self.selected(self.breadcrumbs()[0]);
            }
        } else {
            self.selected = ko.observable(self.breadcrumbs()[0]);
        }


        self.crumbClicked = function (index) {
            var leavingCrumb = self.breadcrumbs()[self.breadcrumbs().indexOf(self.selected())];
            var clickedCrumb = self.breadcrumbs()[index];

            var canSelect = true;
            if (leavingCrumb.hasOwnProperty("leave")) {
                leaveReturn = leavingCrumb.leave();
                if (!isNaN(leaveReturn)) {
                    canSelect = leaveReturn;
                }
            }

            if (canSelect) {
                if (clickedCrumb.hasOwnProperty("clicked")) {
                    clickedReturn = clickedCrumb.clicked();
                    if (!isNaN(clickedReturn)) { // only set canSelect if it has a value
                        canSelect = clickedReturn;
                    }
                }
            }

            if (canSelect) {
                self.selected(clickedCrumb);
            }
        }
    },
    template: { element: "breadcrumbs-template" }
});
