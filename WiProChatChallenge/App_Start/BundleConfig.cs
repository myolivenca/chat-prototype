using System.Web;
using System.Web.Optimization;

namespace WiProChatChallenge
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/vendor").Include(
                        "~/Scripts/Vendor/modernizr-*",
                        "~/Scripts/Vendor/moment.js",
                        "~/Scripts/Vendor/nicescroll.js",
                        "~/Scripts/App/angular.1.3.16.js",        
                        "~/Scripts/App/angular-route.js",
                        "~/Scripts/App/angular-resource.js",
                        "~/Scripts/App/angular-animate.js",
                        "~/Scripts/App/app.module.js",
                        "~/Scripts/App/Route/route.controller.js",
                        "~/Scripts/App/Chat/chat.controller.js"));

            bundles.Add(new StyleBundle("~/Content/Styles/css").Include(
                "~/Content/Styles/Main.css"));
        }
    }
}