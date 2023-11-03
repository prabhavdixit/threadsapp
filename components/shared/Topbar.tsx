import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
	return (
		<nav className="topbar">
			<div>
				<div>
					<Link href="/" className="flex items-center gap-4">
						<p className="text-heading3-bold text-light-1 max-xs:hidden">
							Breads
						</p>
					</Link>
				</div>
				<div>
					<p className="text-white text-sm">prabhavdixit production ©</p>
				</div>
			</div>
			<div className="flex items-center gap-1">
				<div className="block md:hidden">
					<SignedIn>
						<SignOutButton>
							<div className="flex cursor-pointer">
								<Image
									src="/assets/logout.svg"
									alt="logout"
									width={24}
									height={24}
								/>
							</div>
						</SignOutButton>
					</SignedIn>
				</div>

				<OrganizationSwitcher
					appearance={{
						baseTheme: dark,
						elements: {
							organizationSwitcherTrigger: "py-2 px-4",
						},
					}}
				/>
			</div>
		</nav>
	);
}

export default Topbar;
