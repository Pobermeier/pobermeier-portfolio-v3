import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import SocialMediaIconLink, { IconSize } from "components/SocialMedia/SocialMediaIconLink";
import NavItem from "components/Navigation/NavItem";
import Button from "components/Buttons/Button";
import SiteLogo from "components/Logos/SiteLogo";
import SiteLogoLinked from "components/Logos/SiteLogoLinked";
import DarkModeToggle from "components/Buttons/DarkModeToggle";
import { SocialMediaIcon, NavigationLink, CTAContainer } from "models/datoCMS";
import { noop } from "utils/utilFns";

export interface NavbarProps {
  socialMediaIcons: SocialMediaIcon[];
  navigationLinks: NavigationLink[];
  callToActions: CTAContainer[];
}

const SOCIAL_ICON_SIZE_DESKTOP = "md";
const SOCIAL_ICON_SIZE_MOBILE = "lg";

const Navbar = ({ callToActions, navigationLinks, socialMediaIcons }: NavbarProps) => {
  const renderNavItems = (onCloseCallback = noop) =>
    navigationLinks.map(({ id, isExternalLink, title, url }) => (
      <NavItem
        key={id}
        isExternalLink={isExternalLink}
        name={title}
        url={url}
        onClick={onCloseCallback}
      />
    ));

  const renderSocialMediaIcons = (size?: IconSize | undefined) =>
    socialMediaIcons.map(({ id, name, url, reactIconIdentifier }) => (
      <SocialMediaIconLink
        key={id}
        name={name}
        url={url}
        size={size}
        reactIconIdentifier={reactIconIdentifier}
      />
    ));

  const renderCallToActions = (onCloseCallback = noop, isFullWidth?: boolean) =>
    callToActions?.[0]?.callToActions?.map(
      ({ ctaType, icon, id, isExternalLink, linkUrl, title }) => (
        <Button
          key={id}
          text={title}
          isFullWidth={isFullWidth}
          isIconVisible={!isFullWidth}
          type={ctaType}
          as="a"
          iconUrl={icon?.url}
          isExternalLink={isExternalLink}
          url={linkUrl}
          onClick={onCloseCallback}
        />
      ),
    );

  return (
    <Popover as="header" className="relative bg-white dark:bg-gray-900 shadow-lg dark:shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex">
            <SiteLogoLinked />
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-800">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 space-x-10">
            <div className="flex justify-center items-center space-x-5">
              <DarkModeToggle />
              {renderSocialMediaIcons(SOCIAL_ICON_SIZE_DESKTOP)}
            </div>
            <nav className="space-x-10">{renderNavItems()}</nav>
            <div className="flex justify-center space-x-5">{renderCallToActions()}</div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
        >
          {({ close }) => (
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-700">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <SiteLogoLinked />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-800">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-1 gap-y-4 text-right">{renderNavItems(close)}</div>
                <div className="flex flex-col space-y-3">{renderCallToActions(close, true)}</div>
                <div className="flex justify-end space-x-5">
                  {renderSocialMediaIcons(SOCIAL_ICON_SIZE_MOBILE)}
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
