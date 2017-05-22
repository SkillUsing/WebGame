using System.Web.Mvc;

namespace WebGameDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Base()
        {
            return View();
        }
    }
}